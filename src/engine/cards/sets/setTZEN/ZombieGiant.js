"use strict";
const Constants = require ("../../../Constants");
const ZombieGiantBase = require("../setTBBD/ZombieGiant");

class ZombieGiant extends ZombieGiantBase {
  constructor (game) {
    super(game, "Zombie Giant", "Zendikar Tokens", "TZEN");
  }
}

module.exports = ZombieGiant;
