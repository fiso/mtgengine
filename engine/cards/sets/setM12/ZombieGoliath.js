"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZombieGoliathBase = require("../setM10/ZombieGoliath.js");

class ZombieGoliath extends ZombieGoliathBase {
  constructor(game) {
    super(game, "Zombie Goliath", "Magic 2012", "M12");
  }
}

module.exports = ZombieGoliath;
