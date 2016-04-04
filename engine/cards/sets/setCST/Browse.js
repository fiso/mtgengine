"use strict";
const Constants = require ("../../../Constants");
const BrowseBase = require("../setALL/Browse");

class Browse extends BrowseBase {
  constructor(game) {
    super(game, "Browse", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Browse;
