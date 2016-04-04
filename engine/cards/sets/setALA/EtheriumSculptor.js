"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EtheriumSculptorBase = require("../setMMA/EtheriumSculptor.js");

class EtheriumSculptor extends EtheriumSculptorBase {
  constructor(game) {
    super(game, "Etherium Sculptor", "Shards of Alara", "ALA");
  }
}

module.exports = EtheriumSculptor;
