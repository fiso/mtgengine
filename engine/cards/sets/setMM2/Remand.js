"use strict";
const Constants = require ("../../../Constants");
const RemandBase = require("../setDDM/Remand");

class Remand extends RemandBase {
  constructor(game) {
    super(game, "Remand", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Remand;
