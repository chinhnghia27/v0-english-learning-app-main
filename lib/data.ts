export interface Vocabulary {
  term: string
  partOfSpeech: string
  translation: string
  example: string
  exampleTranslation: string
  phonetic?: string
}

export interface Skill {
  id: string
  name: string
  icon: string
  exerciseUrls: string[]
}

export interface Unit {
  id: number
  slug: string
  title: string
  description: string
  skills: Skill[]
  vocabulary: Vocabulary[]
}

export interface Course {
  id: string
  slug: string
  name: string
  description: string
  backgroundImage: string
  units: Unit[]
}

export const courses: Course[] = [
  {
    id: "business-english",
    slug: "ta-tmcb01",
    name: "Tiếng Anh TMCB 1",
    description: "English for business communication and professional settings",
    backgroundImage: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    units: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      slug: `unit-${i + 1}`,
      title: `Unit ${i + 1}: ${["Introduction to Business", "Meetings & Presentations", "Email Writing", "Negotiations", "Marketing & Sales", "Finance & Banking", "International Trade", "Business Culture"][i]}`,
      description: `Learn essential business English skills for ${["workplace basics", "effective meetings", "professional emails", "successful negotiations", "marketing strategies", "financial terms", "global trade", "cross-cultural communication"][i]}`,
      skills: [
        {
          id: "vocabulary",
          name: "Vocabulary",
          icon: "📝",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "reading",
          name: "Reading",
          icon: "📖",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "listening",
          name: "Listening",
          icon: "🎧",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "writing",
          name: "Writing",
          icon: "✍️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
        {
          id: "speaking",
          name: "Speaking",
          icon: "🗣️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
      ],
      vocabulary: [
        {
          term: "Professional",
          partOfSpeech: "adj",
          translation: "Chuyên nghiệp",
          example: "He is a professional in his field.",
          exampleTranslation: "Anh ấy là chuyên gia trong lĩnh vực của mình.",
          phonetic: "prəˈfɛʃənəl",
        },
        {
          term: "Communicate",
          partOfSpeech: "v",
          translation: "Giao tiếp",
          example: "Effective communication is key.",
          exampleTranslation: "Giao tiếp hiệu quả là chìa khóa.",
          phonetic: "kəˈmjuːnɪkeɪt",
        },
        {
          term: "Workplace",
          partOfSpeech: "n",
          translation: "Nơi làm việc",
          example: "The workplace is where we spend most of our time.",
          exampleTranslation: "Nơi làm việc là nơi chúng ta dành phần lớn thời gian.",
          phonetic: "ˈwɜːrkˌpleɪs",
        },
        {
          term: "Efficient",
          partOfSpeech: "adj",
          translation: "Hiệu quả",
          example: "She works very efficiently.",
          exampleTranslation: "Cô ấy làm việc rất hiệu quả.",
          phonetic: "ɪˈfɪʃənt",
        },
        {
          term: "Collaboration",
          partOfSpeech: "n",
          translation: "Sự hợp tác",
          example: "Collaboration is essential for success.",
          exampleTranslation: "Sự hợp tác là điều cần thiết cho thành công.",
          phonetic: "kəˌlæbəˈreɪʃən",
        },
      ],
    })),
  },
  {
    id: "technical-english",
    slug: "ta-tmcb02",
    name: "Tiếng Anh TMCB 2",
    description: "English for engineering and technical fields",
    backgroundImage: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    units: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      slug: `unit-${i + 1}`,
      title: `Unit ${i + 1}: ${["Technical Basics", "Engineering Processes", "Technical Documentation", "Safety Procedures", "Project Management", "Quality Control", "Innovation & Design", "Technical Support"][i]}`,
      description: `Master technical English for ${["fundamental concepts", "engineering workflows", "writing manuals", "workplace safety", "managing projects", "quality assurance", "creative solutions", "customer support"][i]}`,
      skills: [
        {
          id: "vocabulary",
          name: "Vocabulary",
          icon: "📝",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "reading",
          name: "Reading",
          icon: "📖",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "listening",
          name: "Listening",
          icon: "🎧",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "writing",
          name: "Writing",
          icon: "✍️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
        {
          id: "speaking",
          name: "Speaking",
          icon: "🗣️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
      ],
      vocabulary: [
        {
          term: "Technical",
          partOfSpeech: "adj",
          translation: "Kỹ thuật",
          example: "The technical team will handle this issue.",
          exampleTranslation: "Đội ngũ kỹ thuật sẽ xử lý vấn đề này.",
          phonetic: "ˈtɛknɪkəl",
        },
        {
          term: "Engineering",
          partOfSpeech: "n",
          translation: "Kỹ thuật",
          example: "Engineering requires precision.",
          exampleTranslation: "Kỹ thuật đòi hỏi độ chính xác.",
          phonetic: "ˌen.dʒɪˈnɪr.ɪŋ",
        },
        {
          term: "Process",
          partOfSpeech: "n",
          translation: "Quá trình",
          example: "The manufacturing process is automated.",
          exampleTranslation: "Quá trình sản xuất được tự động hóa.",
          phonetic: "ˈprɑː.ses",
        },
        {
          term: "System",
          partOfSpeech: "n",
          translation: "Hệ thống",
          example: "The new system improves efficiency.",
          exampleTranslation: "Hệ thống mới cải thiện hiệu quả.",
          phonetic: "ˈsɪstəm",
        },
        {
          term: "Specification",
          partOfSpeech: "n",
          translation: "Thông số kỹ thuật",
          example: "The specification for the product is detailed.",
          exampleTranslation: "Thông số kỹ thuật cho sản phẩm rất chi tiết.",
          phonetic: "ˌspɛsɪfɪˈkeɪʃən",
        },
      ],
    })),
  },
  {
    id: "medical-english",
    slug: "ta-tmcb03",
    name: "Tiếng Anh TMCB 3",
    description: "English for healthcare and medical professionals",
    backgroundImage: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    units: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      slug: `unit-${i + 1}`,
      title: `Unit ${i + 1}: ${["Medical Terminology", "Patient Care", "Diagnosis & Treatment", "Medical Records", "Emergency Medicine", "Pharmacy", "Medical Research", "Healthcare Systems"][i]}`,
      description: `Learn medical English for ${["basic terms", "patient interaction", "clinical practice", "documentation", "urgent care", "medications", "scientific studies", "health administration"][i]}`,
      skills: [
        {
          id: "vocabulary",
          name: "Vocabulary",
          icon: "📝",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "reading",
          name: "Reading",
          icon: "📖",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "listening",
          name: "Listening",
          icon: "🎧",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "writing",
          name: "Writing",
          icon: "✍️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
        {
          id: "speaking",
          name: "Speaking",
          icon: "🗣️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
      ],
      vocabulary: [
        {
          term: "Patient",
          partOfSpeech: "n",
          translation: "Bệnh nhân",
          example: "The patient is recovering well.",
          exampleTranslation: "Bệnh nhân đang hồi phục tốt.",
          phonetic: "ˈpeɪʃənt",
        },
        {
          term: "Diagnosis",
          partOfSpeech: "n",
          translation: "Chẩn đoán",
          example: "The doctor made a diagnosis based on the symptoms.",
          exampleTranslation: "Bác sĩ đã đưa ra chẩn đoán dựa trên các triệu chứng.",
          phonetic: "ˌdaɪəɡˈnoʊsɪs",
        },
        {
          term: "Treatment",
          partOfSpeech: "n",
          translation: "Điều trị",
          example: "The treatment plan includes medication and therapy.",
          exampleTranslation: "Kế hoạch điều trị bao gồm thuốc và trị liệu.",
          phonetic: "ˈtriːtmənt",
        },
        {
          term: "Symptom",
          partOfSpeech: "n",
          translation: "Triệu chứng",
          example: "A fever is a common symptom of illness.",
          exampleTranslation: "Sốt là triệu chứng phổ biến của bệnh.",
          phonetic: "ˈsɪmptəm",
        },
        {
          term: "Medication",
          partOfSpeech: "n",
          translation: "Thuốc",
          example: "He prescribed medication for the patient.",
          exampleTranslation: "Anh ấy đã kê thuốc cho bệnh nhân.",
          phonetic: "ˌmɛdəˈkeɪʃən",
        },
      ],
    })),
  },
  {
    id: "tourism-english",
    slug: "ta-tmcb04",
    name: "Tiếng Anh TMCB 4",
    description: "English for hospitality and tourism industry",
    backgroundImage: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    units: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      slug: `unit-${i + 1}`,
      title: `Unit ${i + 1}: ${["Tourism Basics", "Hotel Services", "Travel Planning", "Tour Guiding", "Food & Beverage", "Customer Service", "Cultural Heritage", "Event Management"][i]}`,
      description: `Develop tourism English for ${["industry fundamentals", "accommodation", "itinerary creation", "leading tours", "restaurant service", "guest relations", "local attractions", "organizing events"][i]}`,
      skills: [
        {
          id: "vocabulary",
          name: "Vocabulary",
          icon: "📝",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "reading",
          name: "Reading",
          icon: "📖",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "listening",
          name: "Listening",
          icon: "🎧",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "writing",
          name: "Writing",
          icon: "✍️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
        {
          id: "speaking",
          name: "Speaking",
          icon: "🗣️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
      ],
      vocabulary: [
        {
          term: "Hotel",
          partOfSpeech: "n",
          translation: "Khách sạn",
          example: "We are staying at a hotel near the beach.",
          exampleTranslation: "Chúng tôi đang ở khách sạn gần bãi biển.",
          phonetic: "hoʊˈtɛl",
        },
        {
          term: "Reservation",
          partOfSpeech: "n",
          translation: "Đặt phòng",
          example: "I made a reservation for our stay.",
          exampleTranslation: "Tôi đã đặt phòng cho kỳ nghỉ của chúng tôi.",
          phonetic: "ˌrɛzərˈveɪʃən",
        },
        {
          term: "Guest",
          partOfSpeech: "n",
          translation: "Khách",
          example: "The hotel staff is very attentive to guests.",
          exampleTranslation: "Nhân viên khách sạn rất chú ý đến khách hàng.",
          phonetic: "ɡɛst",
        },
        {
          term: "Itinerary",
          partOfSpeech: "n",
          translation: "Lịch trình",
          example: "Here is your itinerary for the trip.",
          exampleTranslation: "Đây là lịch trình cho chuyến đi của bạn.",
          phonetic: "aɪˈtɪnəˌrɛri",
        },
        {
          term: "Accommodation",
          partOfSpeech: "n",
          translation: "Chỗ ở",
          example: "The accommodation is comfortable and clean.",
          exampleTranslation: "Chỗ ở thoải mái và sạch sẽ.",
          phonetic: "əˌkɑːməˈdeɪʃən",
        },
      ],
    })),
  },
  {
    id: "it-english",
    slug: "ta-tmcb05",
    name: "Tiếng Anh TMCB 5",
    description: "English for information technology and software development",
    backgroundImage: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    units: Array.from({ length: 8 }, (_, i) => {
      const vocabularyUrls =
        i === 0
          ? [
              "https://quiz.com/play/46442731-6680-4f95-826d-294520344e43/",
              "https://quizizz.com/embed/quiz/example",
              "https://wordwall.net/embed/example",
            ]
          : ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"];

      return {
        id: i + 1,
        slug: `unit-${i + 1}`,
        title: `Unit ${i + 1}: ${
          ["Business Conversation", "Business Correspondence", "Business Meetings", "Marketing", "Customer Service", "Negotiation", "Human Resources", "Business Plan"][i]
        }`,
        description: `Practice IT English for ${
          ["computer basics", "coding concepts", "network systems", "data storage", "security protocols", "website creation", "cloud services", "artificial intelligence"][i]
        }`,
        skills: [
          {
            id: "vocabulary",
            name: "Vocabulary",
            icon: "📝",
            exerciseUrls: vocabularyUrls,
          },
          {
            id: "reading",
            name: "Reading",
            icon: "📖",
            exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
          },
          {
            id: "listening",
            name: "Listening",
            icon: "🎧",
            exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
          },
          {
            id: "writing",
            name: "Writing",
            icon: "✍️",
            exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
          },
          {
            id: "speaking",
            name: "Speaking",
            icon: "🗣️",
            exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
          },
        ],
        vocabulary:
        i === 0
          ? [
            {
              term: "Relevant",
              partOfSpeech: "adj",
              translation: "Liên quan",
              example: "This information is relevant to our discussion.",
              exampleTranslation: "Thông tin này liên quan đến cuộc thảo luận của chúng ta.",
              phonetic: "ˈrɛləvənt",
            },
            {
              term: "Specific",
              partOfSpeech: "adj",
              translation: "Cụ thể",
              example: "Can you provide a specific example?",
              exampleTranslation: "Bạn có thể cung cấp một ví dụ cụ thể không?",
              phonetic: "spəˈsɪfɪk",
            },
            {
              term: "Refrain from",
              partOfSpeech: "v",
              translation: "Kiềm chế",
              example: "Please refrain from making personal comments.",
              exampleTranslation: "Vui lòng kiềm chế không bình luận cá nhân.",
              phonetic: "rɪˈfreɪn frɒm",
            },
            {
              term: "Religion",
              partOfSpeech: "n",
              translation: "Tôn giáo",
              example: "We should avoid discussing religion at work.",
              exampleTranslation: "Chúng ta nên tránh thảo luận về tôn giáo tại nơi làm việc.",
              phonetic: "rɪˈlɪdʒən",
            },
            {
              term: "Marital status",
              partOfSpeech: "n",
              translation: "Tình trạng hôn nhân",
              example: "Marital status is a personal matter.",
              exampleTranslation: "Tình trạng hôn nhân là vấn đề cá nhân.",
              phonetic: "ˈmærɪtəl ˈsteɪtəs",
            },
            {
              term: "Gossip about",
              partOfSpeech: "v",
              translation: "Buôn chuyện",
              example: "It's unprofessional to gossip about colleagues.",
              exampleTranslation: "Buôn chuyện về đồng nghiệp là không chuyên nghiệp.",
              phonetic: "ˈɡɒsɪp əˈbaʊt",
            },
            {
              term: "Gossip",
              partOfSpeech: "n",
              translation: "Chuyện phiếm",
              example: "Office gossip can damage relationships.",
              exampleTranslation: "Chuyện phiếm văn phòng có thể làm hỏng mối quan hệ.",
              phonetic: "ˈɡɒsɪp",
            },
            {
              term: "Small talk",
              partOfSpeech: "n",
              translation: "Chuyện xã giao",
              example: "Small talk helps break the ice in meetings.",
              exampleTranslation: "Chuyện xã giao giúp phá vỡ sự im lặng trong cuộc họp.",
              phonetic: "smɔːl tɔːk",
            },
            {
              term: "Promotion",
              partOfSpeech: "n",
              translation: "Thăng tiến",
              example: "She received a promotion for her hard work.",
              exampleTranslation: "Cô ấy được thăng tiến vì làm việc chăm chỉ.",
              phonetic: "prəˈmoʊʃən",
            },
            {
              term: "Congratulate",
              partOfSpeech: "v",
              translation: "Chúc mừng",
              example: "We should congratulate him on his achievement.",
              exampleTranslation: "Chúng ta nên chúc mừng anh ấy về thành tích của mình.",
              phonetic: "kənˈɡrætʃəˌleɪt",
            },
            {
              term: "Compliment",
              partOfSpeech: "v",
              translation: "Khen ngợi",
              example: "It's good to compliment your colleagues' work.",
              exampleTranslation: "Thật tốt khi khen ngợi công việc của đồng nghiệp.",
              phonetic: "ˈkɒmplɪmənt",
            },
            {
              term: "Etiquette",
              partOfSpeech: "n",
              translation: "Quy tắc ứng xử",
              example: "Business etiquette is important in professional settings.",
              exampleTranslation: "Quy tắc ứng xử kinh doanh rất quan trọng trong môi trường chuyên nghiệp.",
              phonetic: "ˈɛtɪkɪt",
            },
            {
              term: "Courtesy",
              partOfSpeech: "n",
              translation: "Sự lịch sự",
              example: "Show courtesy to all your colleagues.",
              exampleTranslation: "Hãy thể hiện sự lịch sự đối với tất cả đồng nghiệp.",
              phonetic: "ˈkɜːrtəsi",
            },
            {
              term: "Neutral",
              partOfSpeech: "adj",
              translation: "Trung lập",
              example: "Try to maintain a neutral tone in discussions.",
              exampleTranslation: "Cố gắng duy trì một giọng điệu trung lập trong cuộc thảo luận.",
              phonetic: "ˈnjuːtrəl",
            },
            {
              term: "Perspective",
              partOfSpeech: "n",
              translation: "Góc nhìn",
              example: "Different perspectives lead to better solutions.",
              exampleTranslation: "Các góc nhìn khác nhau dẫn đến các giải pháp tốt hơn.",
              phonetic: "pərˈspɛktɪv",
            },
            {
              term: "Viewpoint",
              partOfSpeech: "n",
              translation: "Góc nhìn",
              example: "I appreciate your viewpoint on this matter.",
              exampleTranslation: "Tôi đánh giá cao góc nhìn của bạn về vấn đề này.",
              phonetic: "ˈvjuːˌpɔɪnt",
            },
            {
              term: "Insight",
              partOfSpeech: "n",
              translation: "Sự hiểu biết sâu sắc",
              example: "Your insight into the problem is valuable.",
              exampleTranslation: "Sự hiểu biết sâu sắc của bạn về vấn đề này rất quý giá.",
              phonetic: "ˈɪnˌsaɪt",
            },
            {
              term: "Transfer",
              partOfSpeech: "v",
              translation: "Chuyển cuộc gọi",
              example: "I'll transfer your call to the manager.",
              exampleTranslation: "Tôi sẽ chuyển cuộc gọi của bạn cho người quản lý.",
              phonetic: "trænsˈfɜːr",
            },
            {
              term: "Connect",
              partOfSpeech: "v",
              translation: "Kết nối",
              example: "Let me connect you with the right department.",
              exampleTranslation: "Để tôi kết nối bạn với bộ phận phù hợp.",
              phonetic: "kəˈnɛkt",
            },
            {
              term: "Bring up",
              partOfSpeech: "v",
              translation: "Đề cập",
              example: "I want to bring up an important issue.",
              exampleTranslation: "Tôi muốn đề cập đến một vấn đề quan trọng.",
              phonetic: "brɪŋ ʌp",
            },
          ]
          : i === 1
            ? [
              {
                term: "Appreciate",
                partOfSpeech: "v",
                translation: "Ghi nhận",
                example: "We appreciate your prompt payment.",
                exampleTranslation: "Chúng tôi ghi nhận việc thanh toán nhanh chóng của bạn.",
                phonetic: "əˈpriːʃieɪt"
              },
              {
                term: "Attach",
                partOfSpeech: "v",
                translation: "Đính kèm",
                example: "Please attach the report to your email.",
                exampleTranslation: "Vui lòng đính kèm báo cáo vào email của bạn.",
                phonetic: "əˈtætʃ"
              },
              {
                term: "Attachment",
                partOfSpeech: "n",
                translation: "Tài liệu đính kèm",
                example: "The attachment contains the meeting agenda.",
                exampleTranslation: "Tài liệu đính kèm (dành cho email) chứa chương trình nghị sự của cuộc họp.",
                phonetic: "əˈtætʃmənt"
              },
              {
                term: "Enclosure",
                partOfSpeech: "n",
                translation: "Tài liệu đính kèm",
                example: "The enclosure with this letter is my resume.",
                exampleTranslation: "Tài liệu đính kèm (dành cho thư tay) với lá thư này là sơ yếu lý lịch của tôi.",
                phonetic: "ɪnˈkloʊʒər"
              },
              {
                term: "Complain about",
                partOfSpeech: "phr v",
                translation: "Phàn nàn về",
                example: "Customers complain about the slow service.",
                exampleTranslation: "Khách hàng phàn nàn về dịch vụ chậm chạp.",
                phonetic: "kəmˈpleɪn əˈbaʊt"
              },
              {
                term: "Complaint",
                partOfSpeech: "n",
                translation: "Lời phàn nàn",
                example: "We have received a complaint from a customer.",
                exampleTranslation: "Chúng tôi đã nhận được một lời phàn nàn từ một khách hàng.",
                phonetic: "kəmˈpleɪnt"
              },
              {
                term: "Contact",
                partOfSpeech: "v",
                translation: "Liên hệ",
                example: "You can contact me by phone or email.",
                exampleTranslation: "Bạn có thể liên hệ với tôi qua điện thoại hoặc email.",
                phonetic: "ˈkɒntækt"
              },
              {
                term: "Postpone",
                partOfSpeech: "v",
                translation: "Trì hoãn",
                example: "We have to postpone the meeting until next week.",
                exampleTranslation: "Chúng ta phải trì hoãn cuộc họp đến tuần sau.",
                phonetic: "poʊstˈpoʊn"
              },
              {
                term: "Put off",
                partOfSpeech: "phr v",
                translation: "Trì hoãn",
                example: "Don't put off your homework until the last minute.",
                exampleTranslation: "Đừng trì hoãn (thân mật) bài tập về nhà của bạn cho đến phút cuối cùng.",
                phonetic: "pʊt ɒf"
              },
              {
                term: "Require",
                partOfSpeech: "v",
                translation: "Yêu cầu",
                example: "This job requires a lot of experience.",
                exampleTranslation: "Công việc này yêu cầu (đòi hỏi) rất nhiều kinh nghiệm.",
                phonetic: "rɪˈkwaɪər"
              },
              {
                term: "Hesitate",
                partOfSpeech: "v",
                translation: "Ngần ngại",
                example: "Don't hesitate to ask if you have any questions.",
                exampleTranslation: "Đừng ngần ngại (do dự) hỏi nếu bạn có bất kỳ câu hỏi nào.",
                phonetic: "ˈhɛzɪteɪt"
              },
              {
                term: "Damage",
                partOfSpeech: "n",
                translation: "Thiệt hại",
                example: "The storm caused a lot of damage to the building.",
                exampleTranslation: "Cơn bão đã gây ra nhiều thiệt hại cho tòa nhà.",
                phonetic: "ˈdæmɪdʒ"
              },
              {
                term: "Assistance",
                partOfSpeech: "n",
                translation: "Sự hỗ trợ",
                example: "We need your assistance to complete this project.",
                exampleTranslation: "Chúng tôi cần sự hỗ trợ của bạn để hoàn thành dự án này.",
                phonetic: "əˈsɪstəns"
              },
              {
                term: "Subject",
                partOfSpeech: "n",
                translation: "Tiêu đề thư email",
                example: "The subject of the email was 'Meeting Confirmation'.",
                exampleTranslation: "Tiêu đề thư email là 'Xác nhận cuộc họp'.",
                phonetic: "ˈsʌbdʒɛkt"
              },
              {
                term: "Signature",
                partOfSpeech: "n",
                translation: "Chữ ký",
                example: "Please put your signature at the bottom of the page.",
                exampleTranslation: "Vui lòng đặt chữ ký của bạn ở cuối trang.",
                phonetic: "ˈsɪɡnətʃər"
              },
              {
                term: "Spam",
                partOfSpeech: "n",
                translation: "Thư rác",
                example: "My inbox is full of spam.",
                exampleTranslation: "Hộp thư đến của tôi đầy thư rác.",
                phonetic: "spæm"
              },
              {
                term: "Long-standing",
                partOfSpeech: "adj",
                translation: "Lâu dài",
                example: "We have a long-standing relationship with this client.",
                exampleTranslation: "Chúng tôi có mối quan hệ lâu dài với khách hàng này.",
                phonetic: "ˌlɔːŋˈstændɪŋ"
              },
              {
                term: "Prompt",
                partOfSpeech: "adj",
                translation: "Nhanh chóng",
                example: "Thank you for your prompt reply.",
                exampleTranslation: "Cảm ơn bạn đã trả lời nhanh chóng.",
                phonetic: "prɒmpt"
              },
              {
                term: "Formal",
                partOfSpeech: "adj",
                translation: "Trang trọng",
                example: "This is a formal event, so please dress appropriately.",
                exampleTranslation: "Đây là một sự kiện trang trọng, vì vậy vui lòng ăn mặc phù hợp.",
                phonetic: "ˈfɔːməl"
              },
              {
                term: "Informal",
                partOfSpeech: "adj",
                translation: "Thân mật",
                example: "You can use informal language with your friends.",
                exampleTranslation: "Bạn có thể sử dụng ngôn ngữ thân mật với bạn bè của mình.",
                phonetic: "ɪnˈfɔːməl"
              },
              {
                term: "Concerning",
                partOfSpeech: "prep",
                translation: "Về việc",
                example: "I am writing to you concerning the job opening.",
                exampleTranslation: "Tôi viết thư cho bạn về việc mở cửa việc làm.",
                phonetic: "kənˈsɜːrnɪŋ"
              },
              {
                term: "Regarding",
                partOfSpeech: "prep",
                translation: "Liên quan đến",
                example: "I have a question regarding your new product.",
                exampleTranslation: "Tôi có một câu hỏi liên quan đến sản phẩm mới của bạn.",
                phonetic: "rɪˈɡɑːrdɪŋ"
              },
              {
                term: "With regard to",
                partOfSpeech: "prep",
                translation: "Về",
                example: "With regard to your request, we have decided to approve it.",
                exampleTranslation: "Về yêu cầu của bạn, chúng tôi đã quyết định phê duyệt nó.",
                phonetic: "wɪð rɪˈɡɑːrd tuː"
              },
              {
                term: "With reference to",
                partOfSpeech: "prep",
                translation: "Theo như",
                example: "With reference to our conversation, I am sending you the details.",
                exampleTranslation: "Theo như cuộc trò chuyện của chúng ta, tôi đang gửi cho bạn các chi tiết.",
                phonetic: "wɪð ˈrɛfərəns tuː"
              },
              {
                term: "Look forward to",
                partOfSpeech: "phr v",
                translation: "Mong đợi",
                example: "I look forward to hearing from you soon.",
                exampleTranslation: "Tôi mong đợi (sớm) nhận được phản hồi từ bạn.",
                phonetic: "lʊk ˈfɔːrwərd tuː"
              },
              {
                term: "Regret",
                partOfSpeech: "v",
                translation: "Tiếc",
                example: "We regret to inform you that your application has been rejected.",
                exampleTranslation: "Chúng tôi rất tiếc phải thông báo với bạn rằng đơn đăng ký của bạn đã bị từ chối.",
                phonetic: "rɪˈɡrɛt"
              }
            ]
            : i === 2
            ? [
                {
                  term: "Presentation",
                  partOfSpeech: "n",
                  translation: "Bài thuyết trình",
                  example: "She gave an excellent presentation on market trends.",
                  exampleTranslation: "Cô ấy đã có một bài thuyết trình xuất sắc về xu hướng thị trường.",
                  phonetic: "ˌprɛzənˈteɪʃən",
                },
                {
                  term: "Attendee",
                  partOfSpeech: "n",
                  translation: "người tham dự",
                  example: "All attendees received a meeting agenda.",
                  exampleTranslation: "Tất cả những người tham dự đều nhận được chương trình nghị sự cuộc họp.",
                  phonetic: "əˌtɛnˈdiː",
                },
                {
                  term: "Brochure",
                  partOfSpeech: "n",
                  translation: "Tập quảng cáo",
                  example: "Please take a brochure with our company information.",
                  exampleTranslation: "Vui lòng lấy một tập quảng cáo có thông tin công ty của chúng tôi.",
                  phonetic: "broʊˈʃʊr",
                },
                {
                  term: "Illustrate",
                  partOfSpeech: "v",
                  translation: "Minh họa",
                  example: "Let me illustrate this point with a graph.",
                  exampleTranslation: "Để tôi minh họa điểm này bằng một biểu đồ.",
                  phonetic: "ˈɪləˌstreɪt",
                },
                {
                  term: "Figure",
                  partOfSpeech: "n",
                  translation: "Con số",
                  example: "The figures show a 15% increase in sales.",
                  exampleTranslation: "Các con số cho thấy doanh số tăng 15%.",
                  phonetic: "ˈfɪɡjər",
                },
                {
                  term: "Circulate",
                  partOfSpeech: "v",
                  translation: "Chuyển",
                  example: "I'll circulate the meeting notes to everyone.",
                  exampleTranslation: "Tôi sẽ chuyển biên bản cuộc họp cho mọi người.",
                  phonetic: "ˈsɜːrkjəˌleɪt",
                },
                {
                  term: "Delegate",
                  partOfSpeech: "n",
                  translation: "Đại biểu",
                  example: "Each delegate will have 5 minutes to speak.",
                  exampleTranslation: "Mỗi đại biểu sẽ có 5 phút để phát biểu.",
                  phonetic: "ˈdɛləɡət",
                },
                {
                  term: "Audience",
                  partOfSpeech: "n",
                  translation: "Khán giả",
                  example: "The audience was very engaged during the presentation.",
                  exampleTranslation: "Khán giả rất tập trung trong suốt bài thuyết trình.",
                  phonetic: "ˈɔːdiəns",
                },
                {
                  term: "Handout",
                  partOfSpeech: "n",
                  translation: "Tài liệu phát tay",
                  example: "Please refer to the handout on page 3.",
                  exampleTranslation: "Vui lòng tham khảo tài liệu phát tay ở trang 3.",
                  phonetic: "ˈhændaʊt",
                },
                {
                  term: "Show",
                  partOfSpeech: "v",
                  translation: "Cho xem",
                  example: "Let me show you the results of our survey.",
                  exampleTranslation: "Để tôi cho bạn xem kết quả cuộc khảo sát của chúng tôi.",
                  phonetic: "ʃoʊ",
                },
                {
                  term: "Bar chart",
                  partOfSpeech: "n",
                  translation: "Biểu đồ dạng cột",
                  example: "This bar chart compares our quarterly performance.",
                  exampleTranslation: "Biểu đồ dạng cột này so sánh hiệu suất theo quý của chúng ta.",
                  phonetic: "bɑːr tʃɑːrt",
                },
                {
                  term: "Graph",
                  partOfSpeech: "n",
                  translation: "Đồ thị",
                  example: "The graph clearly shows the upward trend.",
                  exampleTranslation: "Đồ thị cho thấy rõ ràng xu hướng tăng trưởng.",
                  phonetic: "ɡræf",
                },
                {
                  term: "Diagram",
                  partOfSpeech: "n",
                  translation: "Sơ đồ thể hiện quá trình",
                  example: "This diagram illustrates our production process.",
                  exampleTranslation: "Sơ đồ này minh họa quy trình sản xuất của chúng ta.",
                  phonetic: "ˈdaɪəˌɡræm",
                },
                {
                  term: "Flip chart",
                  partOfSpeech: "n",
                  translation: "Bảng kẹp giấy",
                  example: "Please write your ideas on the flip chart.",
                  exampleTranslation: "Vui lòng viết ý tưởng của bạn lên bảng kẹp giấy.",
                  phonetic: "flɪp tʃɑːrt",
                },
                {
                  term: "Approach",
                  partOfSpeech: "n/v",
                  translation: "Tiếp cận",
                  example: "We need a new approach to solve this problem.",
                  exampleTranslation: "Chúng ta cần một cách tiếp cận mới để giải quyết vấn đề này.",
                  phonetic: "əˈproʊtʃ",
                },
                {
                  term: "Bicker",
                  partOfSpeech: "v",
                  translation: "Cãi nhau",
                  example: "Stop bickering and focus on the main issue.",
                  exampleTranslation: "Hãy dừng việc cãi nhau và tập trung vào vấn đề chính.",
                  phonetic: "ˈbɪkər",
                },
                {
                  term: "Talk over",
                  partOfSpeech: "phr v",
                  translation: "Nói lấn lướt",
                  example: "Please don't talk over me when I'm speaking.",
                  exampleTranslation: "Vui lòng đừng nói lấn lướt khi tôi đang phát biểu.",
                  phonetic: "tɔːk ˈoʊvər",
                },
                {
                  term: "Take note",
                  partOfSpeech: "phr v",
                  translation: "Ghi chép",
                  example: "Please take note of the important points.",
                  exampleTranslation: "Vui lòng ghi chép những điểm quan trọng.",
                  phonetic: "teɪk noʊt",
                },
                {
                  term: "Jargon",
                  partOfSpeech: "n",
                  translation: "Biệt ngữ",
                  example: "Avoid using technical jargon with new employees.",
                  exampleTranslation: "Tránh sử dụng biệt ngữ kỹ thuật với nhân viên mới.",
                  phonetic: "ˈdʒɑːrɡən",
                },
                {
                  term: "Objection",
                  partOfSpeech: "n",
                  translation: "Phản đối",
                  example: "Do you have any objection to this proposal?",
                  exampleTranslation: "Bạn có phản đối gì với đề xuất này không?",
                  phonetic: "əbˈdʒɛkʃən",
                },
                {
                  term: "Outline",
                  partOfSpeech: "v/n",
                  translation: "Phác thảo",
                  example: "Let me outline the main points of our discussion.",
                  exampleTranslation: "Để tôi phác thảo những điểm chính của cuộc thảo luận của chúng ta.",
                  phonetic: "ˈaʊtˌlaɪn",
                },
                {
                  term: "Section",
                  partOfSpeech: "n",
                  translation: "Phần",
                  example: "We'll discuss this in the next section of the meeting.",
                  exampleTranslation: "Chúng ta sẽ thảo luận điều này trong phần tiếp theo của cuộc họp.",
                  phonetic: "ˈsɛkʃən",
                },
                {
                  term: "Agenda",
                  partOfSpeech: "n",
                  translation: "Lịch",
                  example: "The agenda for today's meeting is on your desk.",
                  exampleTranslation: "Lịch trình nghị sự cho cuộc họp hôm nay ở trên bàn của bạn.",
                  phonetic: "əˈdʒɛndə",
                },
                {
                  term: "Visual",
                  partOfSpeech: "n",
                  translation: "Hình ảnh",
                  example: "Please use more visuals in your presentation.",
                  exampleTranslation: "Vui lòng sử dụng nhiều hình ảnh hơn trong bài thuyết trình của bạn.",
                  phonetic: "ˈvɪʒuəl",
                },
                {
                  term: "Signpost",
                  partOfSpeech: "n",
                  translation: "Dấu hiệu",
                  example: "Use signposts to guide your audience through the presentation.",
                  exampleTranslation: "Sử dụng các dấu hiệu để hướng dẫn khán giả trong suốt bài thuyết trình.",
                  phonetic: "ˈsaɪnˌpoʊst",
                },
              ]
            : i === 3
              ? [
                {
                  term: "Advertise",
                  partOfSpeech: "v",
                  translation: "quảng cáo",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˈædvərˌtaɪz",
                },
                {
                  term: "Endorse",
                  partOfSpeech: "v",
                  translation: "xác nhận chất lượng",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ɪnˈdɔːrs",
                },
                {
                  term: "Convince/Persuade",
                  partOfSpeech: "v",
                  translation: "thuyết phục (Persuasive: (adj) có tính thuyết phục)",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "kənˈvɪns / pərˈsweɪd",
                },
                {
                  term: "Identify",
                  partOfSpeech: "v",
                  translation: "nhận biết, xác định",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "aɪˈdɛntɪˌfaɪ",
                },
                {
                  term: "Effective",
                  partOfSpeech: "adj",
                  translation: "Hiệu quả",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ɪˈfɛktɪv",
                },
                {
                  term: "Beneficial",
                  partOfSpeech: "adj",
                  translation: "có lợi",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˌbɛnəˈfɪʃəl",
                },
                {
                  term: "Eye-catching",
                  partOfSpeech: "adj",
                  translation: "bắt mắt",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˈaɪˌkætʃɪŋ",
                },
                {
                  term: "Informative",
                  partOfSpeech: "adj",
                  translation: "nhiều thông tin",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ɪnˈfɔːrmətɪv",
                },
                {
                  term: "Ultimate",
                  partOfSpeech: "adj",
                  translation: "tối ưu, tốt nhất",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˈʌltɪmət",
                },
                {
                  term: "Static",
                  partOfSpeech: "adj",
                  translation: "ở trạng thái tĩnh",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˈstætɪk",
                },
                {
                  term: "Animated",
                  partOfSpeech: "adj",
                  translation: "ở trạng thái động",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˈænɪmeɪtɪd",
                },
                {
                  term: "Slogan",
                  partOfSpeech: "n",
                  translation: "khẩu hiệu",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˈsloʊɡən",
                },
                {
                  term: "Poster",
                  partOfSpeech: "n",
                  translation: "áp phích quảng cáo",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˈpoʊstər",
                },
                {
                  term: "Leaflet",
                  partOfSpeech: "n",
                  translation: "tờ rơi",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˈliːflət",
                },
                {
                  term: "Exhibition",
                  partOfSpeech: "n",
                  translation: "triển lãm",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˌɛksɪˈbɪʃən",
                },
                {
                  term: "Commercial",
                  partOfSpeech: "n",
                  translation: "quảng cáo trên truyền hình",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "kəˈmɜːrʃəl",
                },
                {
                  term: "Billboard",
                  partOfSpeech: "n",
                  translation: "bảng thông cáo",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˈbɪlˌbɔːrd",
                },
                {
                  term: "Sample",
                  partOfSpeech: "n",
                  translation: "hàng mẫu",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˈsæmpəl",
                },
                {
                  term: "Press",
                  partOfSpeech: "v",
                  translation: "nhấn",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "prɛs",
                },
                {
                  term: "Pop-up",
                  partOfSpeech: "n",
                  translation: "quảng cáo ăn theo",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˈpɒp ʌp",
                },
                {
                  term: "Opportunity",
                  partOfSpeech: "n",
                  translation: "Cơ hội",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "ˌɒpərˈtuːnəti",
                },
                {
                  term: "Threat",
                  partOfSpeech: "n",
                  translation: "mối đe dọa",
                  example: "",
                  exampleTranslation: "",
                  phonetic: "θrɛt",
                },
              ]
              : [
                {
                  term: "Sample",
                  partOfSpeech: "n",
                  translation: "Mẫu",
                  example: "This is a sample vocabulary.",
                  exampleTranslation: "Đây là từ vựng mẫu.",
                  phonetic: "ˈsæmpəl",
                },
              ],
      };
    }),
  },
  {
    id: "legal-english",
    slug: "ta-tm",
    name: "Tiếng Anh Thương Mại",
    description: "English for law and legal professionals",
    backgroundImage: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    units: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      slug: `unit-${i + 1}`,
      title: `Unit ${i + 1}: ${["Legal System", "Contract Law", "Criminal Law", "Civil Procedure", "Corporate Law", "Intellectual Property", "International Law", "Legal Writing"][i]}`,
      description: `Study legal English for ${["court systems", "agreements", "criminal cases", "lawsuits", "business law", "patents & trademarks", "global regulations", "legal documents"][i]}`,
      skills: [
        {
          id: "vocabulary",
          name: "Vocabulary",
          icon: "📝",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "reading",
          name: "Reading",
          icon: "📖",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "listening",
          name: "Listening",
          icon: "🎧",
          exerciseUrls: ["https://quizizz.com/embed/quiz/example", "https://wordwall.net/embed/example"],
        },
        {
          id: "writing",
          name: "Writing",
          icon: "✍️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
        {
          id: "speaking",
          name: "Speaking",
          icon: "🗣️",
          exerciseUrls: ["https://wordwall.net/embed/example", "https://quizizz.com/embed/quiz/example"],
        },
      ],
      vocabulary: [
        {
          term: "Legal",
          partOfSpeech: "adj",
          translation: "Pháp lý",
          example: "This document is legal.",
          exampleTranslation: "Tài liệu này là hợp pháp.",
          phonetic: "ˈliːɡəl",
        },
        {
          term: "Contract",
          partOfSpeech: "n",
          translation: "Hợp đồng",
          example: "The contract outlines the terms and conditions.",
          exampleTranslation: "Hợp đồng quy định các điều khoản và điều kiện.",
          phonetic: "ˈkɑːntrækt",
        },
        {
          term: "Law",
          partOfSpeech: "n",
          translation: "Luật",
          example: "The law protects citizens' rights.",
          exampleTranslation: "Luật bảo vệ quyền lợi của công dân.",
          phonetic: "lɔː",
        },
        {
          term: "Court",
          partOfSpeech: "n",
          translation: "Tòa án",
          example: "The case will be heard in court.",
          exampleTranslation: "Vụ việc sẽ được tòa án xem xét.",
          phonetic: "kɔːrt",
        },
        {
          term: "Justice",
          partOfSpeech: "n",
          translation: "Công lý",
          example: "Justice is served by the courts.",
          exampleTranslation: "Công lý được tòa án thực hiện.",
          phonetic: "ˈdʒʌstɪs",
        },
      ],
    })),
  },
]

export function getCourse(courseSlug: string) {
  return courses.find((c) => c.slug === courseSlug)
}

export function getUnit(courseSlug: string, unitSlug: string) {
  const course = getCourse(courseSlug)
  return course?.units.find((u) => u.slug === unitSlug)
}

export function getSkill(courseSlug: string, unitSlug: string, skillId: string) {
  const unit = getUnit(courseSlug, unitSlug)
  return unit?.skills.find((s) => s.id === skillId)
}
