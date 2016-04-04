"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicPageBase = require("../setBRB/AngelicPage.js");

class AngelicPage extends AngelicPageBase {
  constructor(game) {
    super(game, "Angelic Page", "Eighth Edition", "8ED");
  }
}

module.exports = AngelicPage;
