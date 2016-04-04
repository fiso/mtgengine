"use strict";
const Constants = require ("../../../Constants");
const SkullofOrmBase = require("../set8ED/SkullofOrm");

class SkullofOrm extends SkullofOrmBase {
  constructor(game) {
    super(game, "Skull of Orm", "The Dark", "DRK");
  }
}

module.exports = SkullofOrm;
