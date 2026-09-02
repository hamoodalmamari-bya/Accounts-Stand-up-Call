# Accounts stand-up board

A wall-screen view of the Stand up database on the Accounts Stand-up Call page.
It tours the portfolio: all accounts first, then one account at a time, holding on
each task for 20 seconds and showing the last entry from its Update Log.

Order of accounts: MEEZA, Omantel, TRA, Ooredoo Oman, Otech, Aramco, NTDP, GTM.
A full loop is about ten minutes.

## Works straight away

Deploy the folder and it runs on the snapshot baked into the page, dated on screen
so nobody mistakes old data for live. Drag the folder onto https://app.netlify.com/drop,
or connect it as a Git repo. Nothing to configure.

## Making it update itself

No Notion token and no workspace-owner permission needed. Notion pushes each edited
task to the site.

1. In Netlify, add an environment variable `INGEST_KEY` with any random string.
2. In the Stand up database, click the lightning icon, then New automation.
   - **When:** switch the dropdown from "all" to **any**, then add triggers
     `Page added` and `Any property edited`.
   - **Do:** Send webhook.
   - **URL:** `https://YOUR-SITE.netlify.app/api/standup?key=YOUR_INGEST_KEY`
   - **Content:** tick "Select all existing properties".
3. Enable it. Edit any task and the board picks it up within a minute.

Deploy from a Git repo rather than drag-and-drop if you use this. Drag-and-drop skips
the npm install, which means edits are held in memory only and are lost whenever the
function goes cold. From a repo, they persist.

## Known limits

- Webhooks fire on change, so a task nobody edits keeps its snapshot values. The
  snapshot covers all 29 open items, so this only matters for accuracy of old entries.
- Deleting a task in Notion does not fire an automation. It stays on the board until
  someone edits it or the snapshot is regenerated.
- New accounts resolve by page id. Add a line to `ACCOUNTS` in the function when a
  new customer appears, otherwise its tasks group under their Project instead.
- The site URL is public. Use Netlify password protection if that matters.

## On screen

Full-screen the site URL (`F11`, or kiosk mode). It needs no mouse. Keyboard, if you
want to drive it during a call:

    right / left    next or previous task
    down / up       jump to the next or previous account
    o               back to the all-accounts view
    r               refresh from Notion now

## Choices worth reviewing

- Items marked **Done** are excluded from the tour and counted in the top-right total.
- MTCIT tasks appear under **GTM**, since both carry the GTM project and MTCIT was not
  in the account order you gave. Say so if you would rather MTCIT stood on its own.
- Colours follow the brand guide: monochrome base, phthalo blue `#071286` for structure
  and live work, rose `#EC096F` reserved for anything past its due date.

## Files

    public/index.html              the board
    netlify/functions/standup.js   GET serves the feed, POST takes Notion's webhook
    netlify.toml                   publish folder and the /api/standup route
    package.json                   one dependency, for persistent storage
