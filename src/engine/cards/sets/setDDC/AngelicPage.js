"use strict";
const Constants = require ("../../../Constants");
const AngelicPageBase = require("../setA25/AngelicPage");

class AngelicPage extends AngelicPageBase {
  constructor (game) {
    super(game, "Angelic Page", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = AngelicPage;
