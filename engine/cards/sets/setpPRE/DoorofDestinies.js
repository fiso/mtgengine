"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DoorofDestiniesBase = require("../setM14/DoorofDestinies.js");

class DoorofDestinies extends DoorofDestiniesBase {
  constructor(game) {
    super(game, "Door of Destinies", "Prerelease Events", "pPRE");
  }
}

module.exports = DoorofDestinies;
