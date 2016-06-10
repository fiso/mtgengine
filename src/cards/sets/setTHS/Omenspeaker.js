"use strict";
const Constants = require ("../../../Constants");
const OmenspeakerBase = require("../setDDO/Omenspeaker");

class Omenspeaker extends OmenspeakerBase {
  constructor (game) {
    super(game, "Omenspeaker", "Theros", "THS");
  }
}

module.exports = Omenspeaker;
