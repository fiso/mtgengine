"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkullofOrmBase = require("../set8ED/SkullofOrm.js");

class SkullofOrm extends SkullofOrmBase {
  constructor(game) {
    super(game, "Skull of Orm", "The Dark", "DRK");
  }
}

module.exports = SkullofOrm;
