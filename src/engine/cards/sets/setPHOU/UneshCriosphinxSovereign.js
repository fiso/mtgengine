"use strict";
const Constants = require ("../../../Constants");
const UneshCriosphinxSovereignBase = require("../setHOU/UneshCriosphinxSovereign");

class UneshCriosphinxSovereign extends UneshCriosphinxSovereignBase {
  constructor (game) {
    super(game, "Unesh, Criosphinx Sovereign", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = UneshCriosphinxSovereign;
