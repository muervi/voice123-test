class Provider {
    constructor({ id, name, username, profileLink, picture, summary, sampleMusic }) {
      this.id = id;
      this.name = name;
      this.username = username;
      this.profileLink = profileLink;
      this.picture = picture;
      this.summary = summary;
      this.sampleMusic = sampleMusic;
    }
  
    static fromApiResponse(apiProvider) {
      return new Provider({
        id: apiProvider.id,
        name: apiProvider.user.name,
        username: apiProvider.user.username,
        profileLink: `https://voice123.com/${apiProvider.user.username}`,
        picture: apiProvider.user.picture_medium,
        summary: apiProvider.summary,
        sampleMusic: apiProvider.relevant_sample.file
      });
    }
  }
  
  module.exports = Provider;
  