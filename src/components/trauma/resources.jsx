import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";

const Resources = () => {
  const content = {
    intro:
      "Trauma encompasses the profound impact of distressing events on an individual's emotional and mental well-being. From experiences of abuse to accidents or violence, the aftermath of trauma can lead to complex emotional responses such as fear, anxiety, anger, and guilt. Navigating through trauma requires understanding, empathy, and resilience. This collection of resources delves into the realms of trauma research, therapy, self-care, and hope. By embracing these insights, we can foster a compassionate community that supports healing and renewed hope for those affected by trauma.",
    book: [
      {
        title:
          "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
        author: "Bessel van der Kolk",
        link: "https://www.goodreads.com/book/show/18693771-the-body-keeps-the-score",
        image: book1,
      },
      {
        title:
          "Trauma and Recovery: The Aftermath of Violence - From Domestic Abuse to Political Terror",
        author: "Judith Herman",
        link: "https://www.goodreads.com/en/book/show/542700",
        image: book2,
      },
      {
        title: "Waking the Tiger: Healing Trauma",
        author: "Peter A.Levine",
        link: "https://www.goodreads.com/en/book/show/384924",
        image: book3,
      },
    ],
    website: [
      {
        title: "Malaysian Mental Health Association",
        link: "https://mmha.org.my/",
      },
      {
        title: "Mental Illness Awareness & Support Association",
        link: "https://www.miasa.org.my/index.html",
      },
    ],
    ted: {
      title: "The Impact of Childhood Trauma on Health Across a Lifetime",
      speaker: "Nadine Burke Harris",
      link: "https://www.youtube.com/watch?v=95ovIJ3dsNk&pp=ygU6VGhlIEltcGFjdCBvZiBDaGlsZGhvb2QgVHJhdW1hIG9uIEhlYWx0aCBBY3Jvc3MgYSBMaWZldGltZQ%3D%3D",
      code: (
        <iframe
          className="md:w-[560px] w-96"
          height="315"
          src="https://www.youtube.com/embed/95ovIJ3dsNk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    },
    ending:
      "Remember that trauma is a complex topic, and seeking professional help is essential for those who have experienced trauma or are supporting someone who has. These resources can provide valuable insights and knowledge on trauma, but professional guidance and understanding are crucial for healing and recovery.",
  };

  return (
    <div className="md:col-span-4 pb-6 md:pt-0 pt-6">
      <div className="text-3xl pb-6 font-serif">
        Resources for Understanding Trauma
      </div>
      <div className="pb-6 text-justify">{content.intro}</div>
      <div className="text-lg underline pb-6">Books</div>
      {content.book.map((item, index) => (
        <div key={index} className="pb-6 pl-6">
          <div className="">
            <ul className="list-disc">
              <li>{item.title}</li>
            </ul>
          </div>
          <div className="italic pb-2">{item.author}</div>
          <div>
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={item.image} className="w-28" />
            </a>
          </div>
        </div>
      ))}
      <div className="text-lg underline pb-6">Websites</div>
      {content.website.map((item, index) => (
        <div key={index} className="pb-6 pl-6">
          <div className="">
            <ul className="list-disc">
              <li>{item.title}</li>
            </ul>
          </div>
          <div className="italic pb-2 hover:text-gray-400">
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.link}
            </a>
          </div>
        </div>
      ))}
      <div className="text-lg underline pb-6">TED Talks</div>
      <div className="hover:text-gray-400">
        <a href={content.ted.link} target="_blank" rel="noreferrer">
          {content.ted.title}
        </a>
      </div>
      <div className="italic pb-6">{content.ted.speaker}</div>
      <div>{content.ted.code}</div>

      <div className="pt-6">{content.ending}</div>
    </div>
  );
};

export default Resources;
