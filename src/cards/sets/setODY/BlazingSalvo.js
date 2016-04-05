"use strict";
const Constants = require ("../../../Constants");
const BlazingSalvoBase = require("../setDDK/BlazingSalvo");

class BlazingSalvo extends BlazingSalvoBase {
  constructor(game) {
    super(game, "Blazing Salvo", "Odyssey", "ODY");
  }
}

module.exports = BlazingSalvo;
