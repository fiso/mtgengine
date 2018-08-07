"use strict";
const Constants = require ("../../../Constants");
const PoolsofBecomingBase = require("../setPCA/PoolsofBecoming");

class PoolsofBecoming extends PoolsofBecomingBase {
  constructor (game) {
    super(game, "Pools of Becoming", "Planechase", "HOP");
  }
}

module.exports = PoolsofBecoming;
