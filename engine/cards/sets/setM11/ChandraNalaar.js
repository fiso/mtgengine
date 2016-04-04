"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChandraNalaarBase = require("../setDD3_JVC/ChandraNalaar.js");

class ChandraNalaar extends ChandraNalaarBase {
  constructor(game) {
    super(game, "Chandra Nalaar", "Magic 2011", "M11");
  }
}

module.exports = ChandraNalaar;
