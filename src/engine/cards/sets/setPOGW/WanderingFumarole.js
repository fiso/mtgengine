"use strict";
const Constants = require ("../../../Constants");
const WanderingFumaroleBase = require("../setOGW/WanderingFumarole");

class WanderingFumarole extends WanderingFumaroleBase {
  constructor (game) {
    super(game, "Wandering Fumarole", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = WanderingFumarole;
