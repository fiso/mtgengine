"use strict";
const Constants = require ("../../../Constants");
const ChandraNalaarBase = require("../setDD3_JVC/ChandraNalaar");

class ChandraNalaar extends ChandraNalaarBase {
  constructor (game) {
    super(game, "Chandra Nalaar", "Magic 2010", "M10");
  }
}

module.exports = ChandraNalaar;
