"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AnimalBoneyard extends Card {
  constructor(game) {
    super(game, "Animal Boneyard", "Odyssey", "ODY");
  }
}

module.exports = AnimalBoneyard;
