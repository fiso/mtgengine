"use strict";
const Constants = require ("../../../Constants");
const OmenspeakerBase = require("../setM19/Omenspeaker");

class Omenspeaker extends OmenspeakerBase {
  constructor (game) {
    super(game, "Omenspeaker", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Omenspeaker;
