"use strict";
const Constants = require ("../../../Constants");
const JolraelsCentaurBase = require("../setWC97/JolraelsCentaur");

class JolraelsCentaur extends JolraelsCentaurBase {
  constructor (game) {
    super(game, "Jolrael's Centaur", "Mirage", "MIR");
  }
}

module.exports = JolraelsCentaur;
