"use strict";
const Constants = require ("../../../Constants");
const RattlechainsBase = require("../setSOI/Rattlechains");

class Rattlechains extends RattlechainsBase {
  constructor (game) {
    super(game, "Rattlechains", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = Rattlechains;
