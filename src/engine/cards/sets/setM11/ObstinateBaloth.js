"use strict";
const Constants = require ("../../../Constants");
const ObstinateBalothBase = require("../setIMA/ObstinateBaloth");

class ObstinateBaloth extends ObstinateBalothBase {
  constructor (game) {
    super(game, "Obstinate Baloth", "Magic 2011", "M11");
  }
}

module.exports = ObstinateBaloth;
