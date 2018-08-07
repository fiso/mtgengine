"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VizierofManyFacesToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Vizier of Many Faces Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = VizierofManyFacesToken;
