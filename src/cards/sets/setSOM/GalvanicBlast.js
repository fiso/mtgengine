"use strict";
const Constants = require ("../../../Constants");
const GalvanicBlastBase = require("../setDDU/GalvanicBlast");

class GalvanicBlast extends GalvanicBlastBase {
  constructor (game) {
    super(game, "Galvanic Blast", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GalvanicBlast;
