"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VizierofManyFaces extends UnimplementedCard {
  constructor (game) {
    super(game, "Vizier of Many Faces", "Amonkhet", "AKH");
  }
}

module.exports = VizierofManyFaces;
