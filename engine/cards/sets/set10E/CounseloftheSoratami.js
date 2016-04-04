"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CounseloftheSoratamiBase = require("../setCHK/CounseloftheSoratami.js");

class CounseloftheSoratami extends CounseloftheSoratamiBase {
  constructor(game) {
    super(game, "Counsel of the Soratami", "Tenth Edition", "10E");
  }
}

module.exports = CounseloftheSoratami;
