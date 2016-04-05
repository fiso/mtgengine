"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VexingSphinx extends UnimplementedCard {
  constructor(game) {
    super(game, "Vexing Sphinx", "Coldsnap", "CSP");
  }
}

module.exports = VexingSphinx;
