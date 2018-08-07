"use strict";
const Constants = require ("../../../Constants");
const EtheriumSculptorBase = require("../setC18/EtheriumSculptor");

class EtheriumSculptor extends EtheriumSculptorBase {
  constructor (game) {
    super(game, "Etherium Sculptor", "Shards of Alara", "ALA");
  }
}

module.exports = EtheriumSculptor;
