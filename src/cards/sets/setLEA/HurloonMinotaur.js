"use strict";
const Constants = require ("../../../Constants");
const HurloonMinotaurBase = require("../setCED/HurloonMinotaur");

class HurloonMinotaur extends HurloonMinotaurBase {
  constructor (game) {
    super(game, "Hurloon Minotaur", "Limited Edition Alpha", "LEA");
  }
}

module.exports = HurloonMinotaur;
