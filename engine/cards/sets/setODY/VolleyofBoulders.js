"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolleyofBouldersBase = require("../setDDI/VolleyofBoulders.js");

class VolleyofBoulders extends VolleyofBouldersBase {
  constructor(game) {
    super(game, "Volley of Boulders", "Odyssey", "ODY");
  }
}

module.exports = VolleyofBoulders;
