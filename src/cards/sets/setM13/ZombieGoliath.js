"use strict";
const Constants = require ("../../../Constants");
const ZombieGoliathBase = require("../setCNS/ZombieGoliath");

class ZombieGoliath extends ZombieGoliathBase {
  constructor (game) {
    super(game, "Zombie Goliath", "Magic 2013", "M13");
  }
}

module.exports = ZombieGoliath;
