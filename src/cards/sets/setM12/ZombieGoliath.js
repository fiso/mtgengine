"use strict";
const Constants = require ("../../../Constants");
const ZombieGoliathBase = require("../setCNS/ZombieGoliath");

class ZombieGoliath extends ZombieGoliathBase {
  constructor (game) {
    super(game, "Zombie Goliath", "Magic 2012", "M12");
  }
}

module.exports = ZombieGoliath;
