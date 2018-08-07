"use strict";
const Constants = require ("../../../Constants");
const DragonspeakerShamanBase = require("../setC17/DragonspeakerShaman");

class DragonspeakerShaman extends DragonspeakerShamanBase {
  constructor (game) {
    super(game, "Dragonspeaker Shaman", "Scourge", "SCG");
  }
}

module.exports = DragonspeakerShaman;
