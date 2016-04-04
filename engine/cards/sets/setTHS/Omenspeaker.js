"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OmenspeakerBase = require("../setDDO/Omenspeaker.js");

class Omenspeaker extends OmenspeakerBase {
  constructor(game) {
    super(game, "Omenspeaker", "Theros", "THS");
  }
}

module.exports = Omenspeaker;
