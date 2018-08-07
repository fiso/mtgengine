"use strict";
const Constants = require ("../../../Constants");
const OmenspeakerBase = require("../setM19/Omenspeaker");

class Omenspeaker extends OmenspeakerBase {
  constructor (game) {
    super(game, "Omenspeaker", "Battlebond", "BBD");
  }
}

module.exports = Omenspeaker;
