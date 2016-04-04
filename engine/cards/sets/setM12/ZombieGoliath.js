"use strict";
const Constants = require ("../../../Constants");
const ZombieGoliathBase = require("../setM10/ZombieGoliath");

class ZombieGoliath extends ZombieGoliathBase {
  constructor(game) {
    super(game, "Zombie Goliath", "Magic 2012", "M12");
  }
}

module.exports = ZombieGoliath;
