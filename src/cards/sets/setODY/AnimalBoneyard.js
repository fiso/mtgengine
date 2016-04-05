"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnimalBoneyard extends UnimplementedCard {
  constructor(game) {
    super(game, "Animal Boneyard", "Odyssey", "ODY");
  }
}

module.exports = AnimalBoneyard;
