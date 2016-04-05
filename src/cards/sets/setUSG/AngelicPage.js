"use strict";
const Constants = require ("../../../Constants");
const AngelicPageBase = require("../setBRB/AngelicPage");

class AngelicPage extends AngelicPageBase {
  constructor(game) {
    super(game, "Angelic Page", "Urza's Saga", "USG");
  }
}

module.exports = AngelicPage;
