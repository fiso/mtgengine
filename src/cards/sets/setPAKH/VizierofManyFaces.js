"use strict";
const Constants = require ("../../../Constants");
const VizierofManyFacesBase = require("../setAKH/VizierofManyFaces");

class VizierofManyFaces extends VizierofManyFacesBase {
  constructor (game) {
    super(game, "Vizier of Many Faces", "Amonkhet Promos", "PAKH");
  }
}

module.exports = VizierofManyFaces;
