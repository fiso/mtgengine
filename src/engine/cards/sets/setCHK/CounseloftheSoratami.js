"use strict";
const Constants = require ("../../../Constants");
const CounseloftheSoratamiBase = require("../set10E/CounseloftheSoratami");

class CounseloftheSoratami extends CounseloftheSoratamiBase {
  constructor (game) {
    super(game, "Counsel of the Soratami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CounseloftheSoratami;
