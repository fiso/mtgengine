"use strict";
const Constants = require ("../../../Constants");
const EtheriumSculptorBase = require("../setMMA/EtheriumSculptor");

class EtheriumSculptor extends EtheriumSculptorBase {
  constructor (game) {
    super(game, "Etherium Sculptor", "Shards of Alara", "ALA");
  }
}

module.exports = EtheriumSculptor;
