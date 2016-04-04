"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrowseBase = require("../setALL/Browse.js");

class Browse extends BrowseBase {
  constructor(game) {
    super(game, "Browse", "Masters Edition II", "ME2");
  }
}

module.exports = Browse;
