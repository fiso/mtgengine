"use strict";
const Constants = require ("../../../Constants");
const DragonspeakerShamanBase = require("../setARC/DragonspeakerShaman");

class DragonspeakerShaman extends DragonspeakerShamanBase {
  constructor (game) {
    super(game, "Dragonspeaker Shaman", "Scourge", "SCG");
  }
}

module.exports = DragonspeakerShaman;
