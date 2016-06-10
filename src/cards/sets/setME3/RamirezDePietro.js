"use strict";
const Constants = require ("../../../Constants");
const RamirezDePietroBase = require("../setLEG/RamirezDePietro");

class RamirezDePietro extends RamirezDePietroBase {
  constructor (game) {
    super(game, "Ramirez DePietro", "Masters Edition III", "ME3");
  }
}

module.exports = RamirezDePietro;
