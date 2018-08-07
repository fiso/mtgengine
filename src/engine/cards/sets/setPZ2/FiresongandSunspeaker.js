"use strict";
const Constants = require ("../../../Constants");
const FiresongandSunspeakerBase = require("../setDOM/FiresongandSunspeaker");

class FiresongandSunspeaker extends FiresongandSunspeakerBase {
  constructor (game) {
    super(game, "Firesong and Sunspeaker", "You Make the Cube", "PZ2");
  }
}

module.exports = FiresongandSunspeaker;
