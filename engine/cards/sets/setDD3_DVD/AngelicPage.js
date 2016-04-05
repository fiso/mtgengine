"use strict";
const Constants = require ("../../../Constants");
const AngelicPageBase = require("../setBRB/AngelicPage");

class AngelicPage extends AngelicPageBase {
  constructor(game) {
    super(game, "Angelic Page", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AngelicPage;
