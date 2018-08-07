"use strict";
const Constants = require ("../../../Constants");
const ChandraNalaarBase = require("../setJVC/ChandraNalaar");

class ChandraNalaar extends ChandraNalaarBase {
  constructor (game) {
    super(game, "Chandra Nalaar", "Magic 2010", "M10");
  }
}

module.exports = ChandraNalaar;
