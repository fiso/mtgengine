"use strict";
const Constants = require ("../../../Constants");
const CounseloftheSoratamiBase = require("../setCHK/CounseloftheSoratami");

class CounseloftheSoratami extends CounseloftheSoratamiBase {
  constructor(game) {
    super(game, "Counsel of the Soratami", "Tenth Edition", "10E");
  }
}

module.exports = CounseloftheSoratami;
