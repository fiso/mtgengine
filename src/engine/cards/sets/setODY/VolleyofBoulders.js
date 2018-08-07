"use strict";
const Constants = require ("../../../Constants");
const VolleyofBouldersBase = require("../setDDI/VolleyofBoulders");

class VolleyofBoulders extends VolleyofBouldersBase {
  constructor (game) {
    super(game, "Volley of Boulders", "Odyssey", "ODY");
  }
}

module.exports = VolleyofBoulders;
