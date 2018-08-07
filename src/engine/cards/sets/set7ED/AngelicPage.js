"use strict";
const Constants = require ("../../../Constants");
const AngelicPageBase = require("../setA25/AngelicPage");

class AngelicPage extends AngelicPageBase {
  constructor (game) {
    super(game, "Angelic Page", "Seventh Edition", "7ED");
  }
}

module.exports = AngelicPage;
