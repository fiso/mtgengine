"use strict";
const Constants = require ("../../../Constants");
const StoneworkPumaBase = require("../setDDP/StoneworkPuma");

class StoneworkPuma extends StoneworkPumaBase {
  constructor(game) {
    super(game, "Stonework Puma", "Zendikar", "ZEN");
  }
}

module.exports = StoneworkPuma;
